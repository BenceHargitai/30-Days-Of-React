const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  const swapValues = (number1,number2) => {
    let temp = number1
    number1 = number2
    number2 = temp
    console.log('number1 is ', number1)
    console.log('number2 is ', number2)
  }
    swapValues(3,4)