const itemContainer = document.getElementById('itemContainer');
const tileContainer = document.getElementById('tileContainer');
const titleCount = document.getElementById('titleCount');
let counter = 0;




const loadAllPost = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const allData = await response.json();
    const data = allData.posts;
    // console.log(data)

    showAllPost(data);

}

loadAllPost();


const showAllPost = (data) => {
    data.forEach((item)=>{
        console.log(item)
        const div = document.createElement('div')
        div.className = `lg:w-[700px]`
        div.innerHTML = `
            <div id="item" class="flex lg:max-w-[650px] flex-col lg:flex-row gap-5 border-gray-300  bg-gray-100 p-5 rounded-2xl border-2">
                    <div class="indicator ">
                            <span class="indicator-item badge  ${item.isActive? 'bg-green-500':'bg-red-600'} badge-secondary border-2 border-white"></span>
                            <div class="grid w-32 h-32 bg-base-300 place-items-center rounded-xl">
                                <img src="${item.image}" alt="" >
                            </div>
                    </div>
                    <div class="space-y-3">
                        <div class="flex gap-5 font-bold">
                            <p>#${item.category}</p>
                            <p>Author: ${item.author.name}</p>
                        </div>
                        <h1 class="text-2xl font-bold">${item.title}</h1>
                        <p>${item.description}</p>
                        <hr>
                        <div class="flex justify-between">
                            <div class="flex gap-5 font-semibold">
                                <div><i class="fa-solid fa-message"></i> <span>${item.comment_count}</span></div>
                                <div><i class="fa-regular fa-eye"></i> <span>${item.view_count}</span></div>
                                <div><i class="fa-regular fa-clock"></i> <span>${item.posted_time} min</span></div>
                            </div>
                            
                            <div onclick="readPost('${item.title}', '${item.view_count}')" class="cursor-pointer">
                                <i class="fa-solid fa-envelope-open bg-green-500 text-white rounded-full p-2 "></i>
                            </div>
                        </div>
                    </div>
                </div>
        `;

        itemContainer.appendChild(div);

    })
}




const readPost = (title, view) => {
    // console.log(title, view)
    const div = document.createElement('div');
    div.className = 'lg:max-w-[400px]'
    div.innerHTML = `<div class="flex gap-5 lg:max-w-[400px] border-gray-300 bg-gray-50 border-2 rounded-lg p-2">
                        <p class="font-bold">${title}</p>
                        <div class="flex gap-3 items-center font-semibold">
                            <i class="fa-regular fa-eye"></i> 
                            <span>${view}</span>
                        </div>
                    </div>`
    tileContainer.appendChild(div);
    counter = counter + 1;
    titleCount.innerText = counter;

}