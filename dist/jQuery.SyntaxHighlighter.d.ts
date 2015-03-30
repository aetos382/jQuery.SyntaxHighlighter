/// <reference path="typings/jquery/jquery.d.ts" />
declare module JQuerySyntaxHighlighter {
    interface Configuration {
        autoLinks: boolean;
        className: string;
        collapse: boolean;
        firstLine: number;
        gutter: boolean;
        highlight: number[];
        htmlScript: boolean;
        light: boolean;
        padLineNumbers: boolean | number;
        quickCode: boolean;
        smartTabs: boolean;
        tabSize: number;
        title: string;
        toolbar: boolean;
    }
    class Highlighter {
        private static options;
        private element;
        private brush;
        private config;
        private autoHighlight;
        constructor(element: JQuery, brush: string, config: Configuration, autoHighlight: boolean);
        HighlightElement(): void;
        private getClasses();
    }
}
