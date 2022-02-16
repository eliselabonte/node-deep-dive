import { readFile, writeFile } from 'fs/promises'

// __dirname not available in modules, so instead of using global path,
// use URL with arguments of file name and import.meta.url
// readFile's 2nd argument is the encoding
let template = await readFile(new URL('./template.html', import.meta.url), 'utf-8')

const data = {
    title: 'Learn Node.js',
    body: 'This is the final HTML'
}

// many methods could be used to replace the data here, but let's stick to a simple for loop
for (const [k, v] of Object.entries(data)) {
    template = template.replace(`{${k}}`, v)
}

// first argument to writeFile is path, second is the file to write
await writeFile(new URL('index.html', import.meta.url), template)