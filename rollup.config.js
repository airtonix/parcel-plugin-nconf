import builtins from "rollup-plugin-node-builtins"
import resolve from "rollup-plugin-node-resolve"

export default {
    input: "src/index.js",
    output: [
        {
            file: "lib/parcel-plugin-nconf.es.js",
            format: "es"
        },
        {
            file: "lib/parcel-plugin-nconf.cjs.js",
            format: "cjs"
        }
    ],
    plugins: [builtins(), resolve()],
    external: []
}
