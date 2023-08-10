import {headers} from 'next/headers';


export default async function Layout({children}) {
    // Headers are set here.
    console.log(headers())

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`);

    return <div>
        {JSON.stringify(headers())}
        {await data.text()}
        {children}
    </div>;
}