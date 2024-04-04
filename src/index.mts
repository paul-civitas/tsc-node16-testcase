import Example from './Example.js'

async function main() {
    const thing : Example = new Example();

    thing.getThing()

    console.log("Hello world")
}

await main()
