class newBook {
    constructor() {
        const createTime = new Date();
        id: localBooks().length + 1,
        title: this.inputBookTitle.value,
        author: {
          firstName: this.inputAuthorFirstName.value,
          lastName: this.inputAuthorLastName.value
        },
        rating: 0,
        cost: +this.inputCost.value,
        categories: this.selectedCategories(),
        createdAt: createTime.getTime(),
        updatedAt: createTime.getTime(),
        image_url: this.inputBookImg.value
    }
}