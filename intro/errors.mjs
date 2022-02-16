import {readFile} from 'fs/promises';

try{
    const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')
    console.log(result)
} catch(err) {
    console.error(err)
}

