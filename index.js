let courseItems = document.querySelectorAll('.carousel-item-premium-courses')

courseItems.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = courseItems[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let reviewsItems = document.querySelectorAll('.carousel-item-reviews')

reviewsItems.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = reviewsItems[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
