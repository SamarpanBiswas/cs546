(function () {
    const Pal = {
        isPal(text){
            if (!text) throw `No text provided`
            const stripped = text.split(/[^a-zA-Z0-9]| /).join('').toLowerCase()
            return stripped.split('').reverse().join('') == stripped
        }
    }

    const staticForm = document.getElementById('static-form')

    if (staticForm){
        const user_input = document.getElementById('input-text')
        const errorContainer = document.getElementById('error-container')
        const errorTextElement = errorContainer.getElementsByClassName(
            'text-goes-here'
        )[0]

        const resultContainer = document.getElementById('result-container')
        const resultTextElement = document.getElementById('attempts')

        staticForm.addEventListener('submit', event => {
            event.preventDefault()
            try {
                errorContainer.classList.add('hidden')
                resultContainer.classList.add('hidden')
                const val = user_input.value
                const li = document.createElement('li')
                li.appendChild(document.createTextNode(val))
                if (Pal.isPal(val))
                    li.setAttribute('class', 'is-palindrome')
                else
                    li.setAttribute('class', 'not-palindrome')
                resultTextElement.appendChild(li)
                resultContainer.classList.remove('hidden')
            } catch (e) {
                errorTextElement.textContent = typeof e == "string" ? e : e.message
                errorContainer.classList.remove('hidden')
            }
        })
    }
})()
