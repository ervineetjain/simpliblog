let allBlogs = [];
let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor turpis at dui mollis mattis. Donec ante elit, pulvinar vitae auctor et, mollis vitae odio. Fusce ac quam arcu. Vivamus cursus non nulla id semper. Etiam egestas sem eget dolor ultricies iaculis. Nunc risus nisi, vestibulum nec augue sit amet, scelerisque ultrices ante. Suspendisse vestibulum, odio ac malesuada dictum, est enim consequat mi, placerat lacinia nibh quam non nisl. Sed rhoncus mattis risus, vel aliquet arcu semper sit amet.\n' +
    '\n' +
    'Curabitur aliquet sollicitudin iaculis. Nullam arcu leo, tempor nec felis ac, aliquet rutrum massa. Fusce pulvinar quam lacus, ac porttitor eros convallis at. Nulla luctus fermentum leo mattis volutpat. Praesent elementum consectetur enim id mollis. Praesent eu tincidunt tortor. Fusce eleifend, arcu sit amet tempus laoreet, nibh lacus vehicula ante, vitae posuere augue sem ac dui. Nam consectetur ipsum sem, eu tempor quam viverra sed. Praesent condimentum rhoncus nulla sit amet euismod.\n' +
    '\n' +
    'Pellentesque tristique elit consequat, feugiat diam nec, porttitor sem. Ut semper placerat nisi id faucibus. Morbi id enim vitae urna porttitor egestas. Phasellus ullamcorper ligula gravida, auctor eros eu, egestas erat. Maecenas accumsan quis leo et consequat. Pellentesque pharetra quam augue, id consectetur urna semper a. Maecenas in bibendum lacus. Nam sit amet ullamcorper sem. Phasellus vulputate venenatis tincidunt. Duis ut lorem bibendum, venenatis urna sit amet, rhoncus lorem. Quisque sit amet varius velit. Sed feugiat risus feugiat ligula varius, non facilisis purus sagittis. Integer velit turpis, tincidunt et arcu varius, finibus malesuada orci. Nam at odio velit. Nunc efficitur tortor a sodales eleifend.\n' +
    '\n' +
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc viverra magna malesuada ligula aliquet gravida. Mauris maximus, lectus eu euismod pulvinar, nisi turpis aliquet mi, sit amet porta odio tellus et nisl. Vestibulum vitae tincidunt quam. Proin commodo nisl vitae sagittis rhoncus. Proin in porta elit. Nulla convallis tellus leo, ut molestie quam venenatis eu. Integer blandit auctor aliquet. Vestibulum non diam id arcu euismod pharetra. Nunc nec nisi magna. In tempus cursus sagittis. Nulla facilisi. Nulla facilisi.\n' +
    '\n' +
    'Sed eget dolor dapibus, feugiat erat non, pulvinar erat. Nunc ornare enim in cursus iaculis. Mauris viverra sodales ipsum ac viverra. Duis vel accumsan metus. Sed eu imperdiet magna. Integer metus dolor, luctus vel finibus a, vestibulum ut velit. Curabitur tristique dui neque, in tempus ligula eleifend et. Nullam et nunc finibus, tempus neque quis, tincidunt lorem. Duis a purus sollicitudin, porttitor ipsum id, volutpat nunc. Sed ut commodo lorem. Nulla facilisi.\n' +
    '\n' +
    'Vestibulum finibus ultrices ipsum, non bibendum dolor vehicula tempor. Fusce in consequat massa. Fusce faucibus orci sit amet nunc consectetur scelerisque et at massa. Nullam luctus elementum nisi. Nulla hendrerit nisi vel eros ultricies finibus. Fusce pharetra egestas augue vel viverra. Maecenas vestibulum mauris eget ligula ultrices viverra. Proin accumsan lacinia scelerisque. Donec tristique diam nibh, non vehicula massa faucibus non. Pellentesque non leo ullamcorper, mollis nibh quis, sodales urna. Donec vitae pretium turpis, pretium ultricies nisi. Maecenas egestas felis arcu, et porta nisi porttitor vitae. Donec lacinia magna id ante placerat, et tincidunt orci facilisis.'


/*
*  Load five initial blog cards
* */


allBlogs.push({
    title: `A Day In A Software Developer's Life`,
    blogContent: loremIpsum,
    firstName: 'Vineet',
    lastName: 'Jain',
    blogBanner: 'https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1662131201/ComputerScience.org/CompSci_SE_How-to-become_38070e124/CompSci_SE_How-to-become_38070e124.jpg?_i=AA'
})
allBlogs.push({
    title: `Blockchain - A Boon Or A Curse`,
    blogContent: loremIpsum,
    firstName: 'Ralph',
    lastName: 'Nancy',
    blogBanner: 'https://www.visiott.com/wp-content/uploads/2021/03/BlockChain_Banner-2.jpg'
})
allBlogs.push({
    title: `Why You Should Forget Facebook`,
    blogContent: loremIpsum,
    firstName: 'Marie',
    lastName: 'Clinton',
    blogBanner: 'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2022/07/p-1-Meta-makes-another-big-move-to-distance-its-metaverse-from-Facebook.png'
})
allBlogs.push({
    title: `7 Ugly Truths A Pretty Website Can't Hide`,
    blogContent: loremIpsum,
    firstName: 'Jaspal',
    lastName: 'Singh',
    blogBanner: 'https://www.techtalkthai.com/wp-content/uploads/2016/02/deep_dark_web.png'
})
allBlogs.push({
    title: `Responsive vs. Adaptive Web Design, Which Is Best For You?`,
    blogContent: loremIpsum,
    firstName: 'Vincent',
    lastName: 'Gregor',
    blogBanner: 'https://images.squarespace-cdn.com/content/546aeb13e4b06c7939161700/1464629097710-MYG1117RHQ2SA5TNLQHO/?content-type=image%2Fjpeg'
})

if (localStorage.getItem('allBlogs')) {
    allBlogs = JSON.parse(localStorage.getItem('allBlogs'))
} else {
    localStorage.setItem("allBlogs", JSON.stringify(allBlogs))
}
allBlogs.forEach((blog, index) => addBlogCard(blog, index))

document.getElementById("submit").addEventListener("click", function () {
    let title = document.getElementById("titleInput").value
    let blogContent = document.getElementById("blogContent").value
    let firstNameInput = document.getElementById("firstNameInput").value
    let lastNameInput = document.getElementById("lastNameInput").value
    let blogBannerInput = document.getElementById("blogBannerInput").value
    console.log(title, blogContent, firstNameInput, lastNameInput)
    formData = {
        'title': title,
        'blogContent': blogContent,
        'firstName': firstNameInput,
        'lastName': lastNameInput,
        'blogBanner': blogBannerInput
    }

    console.log(formData)
    allBlogs.push(formData)
    localStorage.setItem('allBlogs', JSON.stringify(allBlogs))
    console.log("alllllll: ", JSON.stringify(allBlogs))
    console.log("alllllll w/o string: ", allBlogs)
    addBlogCard(formData, allBlogs.length - 1)
    document.getElementById("titleInput").value = ""
    document.getElementById("blogContent").value = ""
    document.getElementById("firstNameInput").value = ""
    document.getElementById("lastNameInput").value = ""
    document.getElementById("blogBannerInput").value = ""
    console.log(JSON.stringify(localStorage.getItem('allBlogs')))
    alert("Your blog was published successfully!")
})

let readArticleButtons = document.querySelectorAll('*[id*=blog-]')
readArticleButtons.forEach(function (elem) {
    elem.addEventListener("click", function () {
        localStorage.setItem("index", this.id.split('-')[1])
    });
});

function addBlogCard(blogData, index) {
    let cardElement = `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card">
                    <img src="${blogData.blogBanner}" class="card-img-top" alt="img/logo/logo.png">
                    <div class="card-body">
                        <h5 class="card-title">${blogData.title.slice(0, 60)}</h5>
                        <p class="card-text">${blogData.blogContent.slice(0, 150)}</p>
                        <a href="articleDetail.html" class="btn btn-light" id='blog-${index}'>Read full article</a>
                    </div>
                </div>
            </div>`
    document.getElementById('article-cards').insertAdjacentHTML("afterbegin", cardElement)
}
