const s = await (typeof process === "object" && process.versions?.node ? Promise.all([import("fs"), import("module")]).then(([fs, module]) => new Promise((a => (r, j) => fs.readFile(a, (e, d) => e ? j(e) : r(d)))(module.createRequire(import.meta.url).resolve("./x.wasm")))).then(WebAssembly.compile) : WebAssembly.compileStreaming(fetch(import.meta.resolve("./x.wasm"))));