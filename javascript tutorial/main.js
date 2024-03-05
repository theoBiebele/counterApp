// function fetchDataFromAPI () {
//     return new Promise ( (resolve, reject)=>
//         setTimeout(()=>{
//                 const data = {message:"he goes coding again"};
//                 resolve (data);
//         },9000)
//     )} ;
//     async function fetchData (){
//         try{
//             console.log("Data is on it's way...");
//             const result = await fetchDataFromAPI();
//             console.log("Data received, "result.message);
             
//         }
//     }


// function getfeedback(){
//     new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//         const result =  await getfeedback();
//             resolve (result);
//         },9000)}
//     console.log(fake);



// async function getProduct(){
//     const result = await fetch('https://fakestoreapi.com/products')
//     console.log("this is the result ", result)
//     if (result.ok){
//         const response =await result.json();
//         console.log(response)
//     }
// }
// console.log(getProduct())













// async function fetchPosts() {
//     try{
//         const repsonse = await fetch('https://fakestoreapi.com/products');

//         if (!Response.ok) {
//             throw new Error(`failed to fetch data. Status: ${response.status}`);
//         }
//         const posts=await response.json();
//         console.log('fetched posts: ', posts.slice(0,5));
//         return posts;
//     }catch(error){
//         console.error('fetching error ',error.message);
//         throw error;
//     }
// }
// fetchPosts()
// .then((posts)=>{
//     console.log('Async function completed successfull: ', posts.length, 'post fetched.');
//     console.log('all post: ', posts);
// })
// .catch((error)=>{
//     console.error('async function encountered an error:', error);
// });



// async function parallelRequests(){
//     try{
//         const [product1,product2]= await Promise.all([
//             fetch('https://fakestoreapi.com/products/1').then((repsonse)=>response.json()),
//             fetch('https://fakestoreapi.com/products/2').then((response) => response.json()
//             )
//         ]);
    
//     console.log(product1, product2);
//     }catch (error) {
//         console.error('Error in parallelRequests: ', error);
//     }
// }

// parallelRequests();





// const makeproduct= ()=>{
//     try{
//     const getproduct = fetch('https://fakestoreapi.com/products');
//     const product = getproduct.json();

//     return product;

// }}catch () {
//     console.log('this did not work');
// }

// makeproduct ()





async function request() {
    try{
        const response1 = await fetch('https://fakestoreapi.com/products');
        console.log(response1);
        const products= await response1.json();
        console.log(products);
        const total = products.reduce((sum,product)=> sum + product.price,0);
       console.log(total);
    } catch(error) {
        console.log(error);
    }
}

request();
