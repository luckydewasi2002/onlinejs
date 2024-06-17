const num = [1,2,3,4,5,6,7,8,9,10]
//const nnum = num.filter((num)=>num>4)
const nnum = num.filter((num)=>{
    return num>4
})
//console.log(nnum)

const books = [
    {
        title:"book1",genre:"fiction",publish:1981,edition:2014
    },
    {
        title:"book2",genre:"no-fiction",publish:1992,edition:2001
    },
    {
        title:"book3",genre:"history",publish:1995,edition:1999
    },
    {
        title:"book4",genre:"science",publish:2014,edition:2022
    },
    {
        title:"book5",genre:"fiction",publish:2005,edition:2014
    }
]
    let userbooks = books.filter((bk)=>bk.genre==="history")
    userbooks = books.filter((bk)=>{
        return bk.publish>=2000 && bk.genre ==="science"
    })
   // console.log(userbooks)

   //map=>

    let mynum = [ 1,2,3,4,5,6,7,8,9,10]

    // let newnum = mynum.map((num)=>{
    //     return num+10
    // })
    const newnum = mynum.map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>=40)
   // console.log(newnum)


   //reduce =>

    let number = [ 1,2,3]
    let totalnumber = number.reduce(function(acc,cuuval){
        console.log(`acc:${acc}and currval :${currval}`);
        return acc+currval
    },0)
    console.log(totalnumber)

    

