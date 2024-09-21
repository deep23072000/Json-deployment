async function a(){
let s = await fetch('https://json-deployment-eta.vercel.app/db.json');
let res =await s.json();
console.log(res.data[0].name)
}a();