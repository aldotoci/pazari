export interface Product {
    name: string,
    model: string,
    quantity: number,
    price: number,
    image: string,
    createdDate: string,
    lastUpdated: string,
    tags: []   
}

export const products = [
    {
        name: "Share rethore dore",
        model: "HS7601",
        price: 2000,
        image: "http://toolsmarket.al/wp-content/uploads/2020/12/HS7601.png",
        onStock: 2,
        reviewStars: 5
    },
    {
        name: "Elektroguri MAKITA GA",
        model: "HS7601",
        price: 450,
        image: "http://toolsmarket.al/wp-content/uploads/2021/02/GA4550R.png",
        onStock: 3,
        reviewStars: 4
    } ,
    {
        name: "Vidator me akumulator",
        model: "DFS451Z",
        price: 200,
        image: "http://toolsmarket.al/wp-content/uploads/2021/01/1D10E895-90A3-4110-A9A0-C91F8BBC06E7.png",
        onStock: 2,
        reviewStars: 5
    } ,
    {
        name: "Sharre me shine disk 260mm me bateri 40V MAKITA",
        model: "LS004GZ01",
        price: 300,
        image: "http://toolsmarket.al/wp-content/uploads/2022/01/LS004GZ01.png",
        onStock: 2,
        reviewStars: 5
    } ,
    {
        name: "Trapan me bateri 18V MAKITA",
        model: "DDF487Z",
        price: 350,
        image: "http://toolsmarket.al/wp-content/uploads/2021/07/DHP487RAJ.png",
        onStock: 2,
        reviewStars: 5
    } ,
    {
        name: "Trapan pneumatik i kombinuar MAKITA",
        model: "HR2652",
        price: 335,
        image: "http://toolsmarket.al/wp-content/uploads/2021/02/HR2652.png",
        onStock: 2,
        reviewStars: 5
    }  
]