images = [
    'https://cdn.mos.cms.futurecdn.net/tXr5UjKDsDBrYBQM9znb2c.jpg',
    'https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Fr%C3%BChlingsallee_Tulpenbl%C3%BCte_2010_%281%29.jpg/1200px-Fr%C3%BChlingsallee_Tulpenbl%C3%BCte_2010_%281%29.jpg',
    'https://i.guim.co.uk/img/media/d5b563bef60c06a22dc65a18c391f63ff42549e6/0_205_4288_2573/master/4288.jpg?width=1200&quality=85&auto=format&fit=max&s=f69dafe4bb0bc828c5e07298240f1d3a'

]

$(document).ready( () =>{
    let i = 1;
    $("#add_img").click( () => {
        if(i === images.length) i = 0;
        
        let img = $("<img>");
        img.attr("src", images[i++]);
        img.addClass("img");
        $("#gallery").append(img);
    });
});