input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("Hello")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(33)
