/// <reference path="typings/jquery/jquery.d.ts"/>

module JQuerySyntaxHighlighter {
    
    interface sh {
        highlight(params: any, element: HTMLElement);
    }
    
    declare var SyntaxHighlighter: sh;
    
    export interface Configuration {
        autoLinks:      boolean;
        className:      string;
        collapse:       boolean;
        firstLine:      number;
        gutter:         boolean;
        highlight:      number[];
        htmlScript:     boolean;
        light:          boolean;
        padLineNumbers: boolean | number;
        quickCode:      boolean;
        smartTabs:      boolean;
        tabSize:        number;
        title:          string;
        toolbar:        boolean;
    }
    
    class Highlighter {
        
        static options = {
            autoLinks:      "auto-links",
            className:      "class-name",
            collapse:       "collapse",
            firstLine:      "first-line",
            gutter:         "gutter",
            highlight:      (value: number[]): string => "highlight:[" + value.join(",") + "]",
            htmlScript:     "html-script",
            light:          "light",
            padLineNumbers: "pad-line-numbers",
            quickCode:      "quick-code",
            smartTabs:      "smart-tabs",
            tabSize:        "tab-size",
            title:          "title",
            toolbar:        "toolbar"
        };
        
        static $: JQueryStatic;
        element: JQuery;
        brush: string;
        config: Configuration;
        autoHighlight: boolean;
        
        constructor(element: JQuery, brush: string, config: Configuration, autoHighlight: boolean) {
            
            this.element = element;
            this.brush = brush;
            this.config = config;
            this.autoHighlight = (autoHighlight == undefined ? true : autoHighlight);
            
        }
        
        static Setup($: JQueryStatic): void {
            
            Highlighter.$ = $;
            
            $.fn.SyntaxHighlight = function (brush: string, config: Configuration, autoHighlight: boolean): any {
                
                return this.each((index: number, element: Element) => {
                    
                    Highlighter.HighlightElement($(element), brush, config, autoHighlight);
                    
                });
                
            };
            
        }
        
        static HighlightElement(element: JQuery, brush: string, config: Configuration, autoHighlight: boolean): void {
            
            var highlighter = new Highlighter($(element), brush, config, autoHighlight);
            highlighter.HighlightElement();
            
        }
        
        HighlightElement(): void {
            
            var classes = this.getClasses();
            classes.unshift("brush:" + this.brush);
            
            Highlighter.$.each(classes, (index: number, value: string) => this.element.addClass(value));
            
            if (this.autoHighlight) {
                SyntaxHighlighter.highlight(null, this.element[0]);
            }
            
        }
        
        getClasses(): string[] {
            
            var classes: string[] = [];
            
            Highlighter.$.each(this.config, (name: string, value: string | ((JQuery) => string)) => {
                var x = Highlighter.options[name];
                var c: string;
                
                if (x == undefined) {
                    if (typeof value == "function") {
                        c = (<(JQuery) => string>value)(this.element);
                    }
                    else {
                        c = name + ":" + value;
                    }
                }
                else if (typeof x == "function") {
                    c = x(value);
                }
                else {
                    c = x + ":" + value;
                }
                
                classes.push(c);
            });
            
            return classes;
        }
    }

}
