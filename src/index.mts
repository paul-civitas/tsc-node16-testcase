import Example from './Example.mjs'
import SecondExample from './SecondExample.cjs'

async function main() {
    const redfish : Example = new Example()
    const bluefish : SecondExample = new SecondExample()

    redfish.getThing()
    bluefish.getThing()
}

await main()
