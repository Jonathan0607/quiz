class Question{
    constructor(){
    this.input = createInput("Answer");
    this.option1 = createElement('h2');
    this.title = createElement('h2');
    this.option2 = createElement('h2');
    this.question = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 =createElement('h2');
}
hide(){
    this.input.hide()
    this.option1.hide()
    this.title.hide()
    this.option2.hide()
    this.question.hide()
    this.option3.hide()
    this.option4.hide()
}
display(){
    this.input.position(150, 230)

    
    this.option1.html("3")
    this.title.html("The Quiz")
    this.option2.html("2")
    this.question.html("1+1")
    this.option3.html("1")
    this.option4.html("4")
    this.option1.position(150,160)
    this.title.position(350, 0)
    this.option2.position(150, 100)
    this.question.position(150, 80)
    this.option3.position(150, 120)
    this.option4.position(150, 140)
}
}
