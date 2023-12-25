// The node:path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require("path");
const posixPath = require("node:path").posix;

// ===============(1) path.basename(path[, suffix])===============**
// path <string>, suffix <string> An optional suffix to remove
// The path.basename() method returns the last portion of a path, similar to the Unix basename command
const baseName = path.basename("/foo/bar/baz/asdf/quux.html");
console.log("BaseName::-> ", baseName); //quux.html

// Although Windows usually treats file names, including file extensions, in a case-insensitive manner, this function does not
const a = path.win32.basename("C:\\foo.html", ".html");
console.log("baseName with match suffix ::-> ", a); //foo

const b = path.win32.basename("C:\\foo.HTML", ".html");
console.log("baseName with unmatch suffix ::-> ", b);

// ===============(2) path.delimiter===============**
// Provides the platform-specific path delimiter:
// ';' for Windows,  ':' for POSIX
const delimiter = path.delimiter;
console.log("delimiter ::-> ", delimiter);
console.log("Path ::-> ", process.env.path);
//  The PATH variable typically contains a colon-separated list of directories where executable files are located.
//  This allows you to run commands from the command line without specifying the full path to the executable.
console.log(process.env.path.split(path.delimiter));

// ===============(3) path.dirname(path)===============**
// The path.dirname() method returns the directory name of a path, similar to the Unix dirname command.
const dirName = path.dirname("/foo/bar/baz/asdf/quux.html");
console.log(`directoryName ::-> `, dirName);

// ===============(4) path.extname(path)===============**
// The path.extname() method returns the extension of the path.
// from the last occurrence of the . (period) character to end of string in the last portion of the path
// If there is no . in the last portion of the path, or if there are no . characters other than the first character of the basename of path, an empty string is returned.
const extentionName = path.extname("/foo/bar/baz/asdf/quux.html");
console.log(`extentionName ::-> `, extentionName); //.html
path.extname("index.coffee.md"); // .md
path.extname("index."); // .
path.extname("index"); // ''
path.extname(".index"); // ''
path.extname(".index.md"); // Returns: '.md'

// ===============(5) path.format(pathObject)===============**
// returns a path string from an object. This is the opposite of path.parse().

// pathObject <Object> Any JavaScript object having the following properties:
// dir <string>
// root <string>
// base <string>
// name <string>
// ext <string>

// When providing properties to the pathObject remember that there are combinations where one property has priority over another:
// pathObject.root is ignored if pathObject.dir is provided
// pathObject.ext and pathObject.name are ignored if pathObject.base exists

const newPath = path.format({ dir: "C:\\path\\dir", base: "file.txt" });
console.log(`newPath ::-> `, newPath);
path.format({ root: "/ignored", dir: "/home/user/dir", base: "file.txt" }); //'/home/user/dir/file.txt'
path.format({ root: "/", base: "file.txt", ext: "ignored" }); // '/file.txt'
path.format({ root: "/", name: "file", ext: ".txt" }); //'/file.txt' (`name` + `ext` will be used if `base` is not specified.)
path.format({ root: "/", name: "file", ext: "txt" }); // '/file.txt' (The dot will be added if it is not specified in `ext`.)

// ===============(6) path.isAbsolute(path)===============**
// The path.isAbsolute() method determines if path is an absolute path.
// If the given path is a zero-length string, false will be returned.

const isAbsolute = path.isAbsolute("C:\\foo\\..");
console.log("is path absolote ::->", isAbsolute);
path.isAbsolute("bar/baz"); // false
path.isAbsolute("\\\\server"); // true
path.isAbsolute("/foo/bar"); // true
path.isAbsolute("qux/"); // false
path.isAbsolute("."); // false

// ===============(7) path.join([...paths])===============**
// joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
// Zero-length path segments are ignored.
// If the joined path string is a zero-length string then '.' will be returned, representing the current working directory.

const joinPath = path.join("/foo", "bar", "baz/asdf", "quux");
console.log(`joinPath ::-> `, joinPath);

// ===============(8) path.normalize(path)===============**
// normalizes the given path, resolving '..' and '.' segments.
// When multiple, sequential path segment separation characters are found (e.g. / on POSIX and either \ or / on Windows), they are replaced by a single instance of the platform-specific path segment separator (/ on POSIX and \ on Windows).

const normalizePath = path.normalize("/foo/bar//baz/asdf/quux/..");
console.log(`normalizePath ::->`, normalizePath);
path.normalize("C:\\temp\\\\foo\\bar\\..\\"); //  'C:\\temp\\foo\\'
path.win32.normalize("C:////temp\\\\/\\/\\/foo/bar"); //  'C:\\temp\\foo\\bar'

// ===============(9) path.parse(path)===============**
// returns an object whose properties represent significant elements of the path.

const parsePath = path.parse("C:\\path\\dir\\file.txt");
console.log(`parsePath ::->`, parsePath);
path.parse("/home/user/dir/file.txt"); //  { root: '/',dir:'/home/user/dir',base: 'file.txt',ext: '.txt',name: 'file' }

//===============(10) path.posix===============**
// The path.posix property provides access to POSIX specific implementations of the path methods.
// The API is accessible via require('node:path').posix or require('node:path/posix').

// ===============(11) path.relative(from, to)===============**
// returns the relative path from from to to based on the current working directory.
// If from and to each resolve to the same path (after calling path.resolve() on each), a zero-length string is returned.
// If a zero-length string is passed as from or to, the current working directory will be used instead of the zero-length strings.
const fromPath = "/home/user/project";
const toPath = "/home/user/project/subfolder/file.txt";
const relativePath = path.relative(fromPath, toPath);
console.log(`relativePath ::->`, relativePath);

// ===============(12) path.resolve([...paths])===============**
// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
const resolvedPath = path.resolve("/foo/bar", "./baz");
console.log(`resolvedPath ::->`, resolvedPath);

// ===============(13) path.sep===============**
// Provides the platform-specific path segment separator:
// '\' on Windows,  '/' on POSIX
const segmentSeprator = path.sep;
console.log(`segmentSeprator ::->`, segmentSeprator);

// ==============(14) path.toNamespacedPath(path)===============**
// On Windows systems only, returns an equivalent namespace-prefixed path for the given path
// If path is not a string, path will be returned without modifications.
// This method is meaningful only on Windows systems.
//  On POSIX systems, the method is non-operational and always returns path without modifications.

const windowsPath = "\\\\server\\share\\file.txt";
const namespacedPath = path.toNamespacedPath(windowsPath);
console.log(namespacedPath);
