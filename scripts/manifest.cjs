// @ts-check
"use strict";
const { Formatter, CommentPolicy, FracturedJsonOptions, EolStyle } = require("fracturedjsonjs");
const fs = require("fs");
const path = require("path");
const { jsonc } = require("jsonc");
const version = require("../package.json")["version"];
const manifestSrcPath = path.join(__dirname, "..", "src", "manifest.jsonc");
const manifestDistPath = path.join(__dirname, "..", "dist", "unzipped", "manifest.json");


let manifest = jsonc.parse(fs.readFileSync(manifestSrcPath, "utf8"));
manifest["version"] = version;
manifest["manifest_version"] = 3;



const options = new FracturedJsonOptions();
options.MaxTotalLineLength = 80;
options.MaxInlineComplexity = 1;
options.JsonEolStyle = EolStyle.Lf;
options.CommentPolicy = CommentPolicy.Remove;

const formatter = new Formatter();
formatter.Options = options;


const newManifest = formatter.Serialize(manifest);


// @ts-expect-error
fs.writeFileSync(manifestDistPath, newManifest);
