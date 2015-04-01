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
}
