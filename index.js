const endPoint = "http://localhost:3000/api/v1/syllabuses"

document.addEventListener('DOMContentLoaded', () => {
   getSyllabi()

   const createSyllabusForm = document.querySelector("#create-syllabus-form")

   createSyllabusForm.addEventListener("submit", (e) => createFormHandler(e))
   
})

function getSyllabi() {
    fetch(endPoint)
    .then(response => response.json())
    .then(syllabi => {
        syllabi.data.forEach(syllabus => {
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
            const syllabusMarkup = `
              <div data-id=${syllabus.id}>
                <img src=${syllabus.attributes.image_url} height="200" width="250">
                <h3>${syllabus.attributes.title}</h3>
                <p>${syllabus.attributes.category.name}</p>
                <button data-id=${syllabus.id}>edit</button>
              </div>
              <br><br>`;
    
              document.querySelector('#syllabus-container').innerHTML += syllabusMarkup
          })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const imageInput = document.querySelector('#input-url').value
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(titleInput, descriptionInput, imageInput, categoryId)
}

function postFetch(title, description, image_url, category_id) {
    console.log(title, description, image_url, category_id);
}