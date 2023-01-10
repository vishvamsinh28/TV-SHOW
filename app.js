async function getshow(x){
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${x}`);
  const data = await res.json();
  console.log(data);
  for(naa of data){
    try{
        console.log(naa.show.name);
        console.log(naa);
        let img = document.createElement("img");
        let an = document.createElement("a");
        an.href = naa.show.officialSite;
        let figcaption = document.createElement("figcaption");
        let figure = document.createElement("figure");
        figcaption.innerText = naa.show.name;
        img.src = naa.show.image.original;
        document.querySelector("#results").appendChild(figure);
        an.append(figcaption);
        figure.append(img);
        figure.append(an);
    }catch{

    }
        
  }
  
//   let img = document.createElement("img");
//   img.src = data[0].show.image.original;
//   document.body.append(img);
//   console.log(data[0].show.image.original);
}
const inpu = document.querySelector('input');
const bt = document.querySelector("#s");
const c = document.querySelector("#c");

bt.addEventListener("click" , () => {
    getshow(inpu.value);
})

c.addEventListener('click' , () => window.location.reload());
 