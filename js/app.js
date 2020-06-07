let vm = new Vue ({
  el: "#app",
  data: {
    total: 0,
    current: 0,
    operator: '',
    numToCalc: [],
    rowNumber: [
      ['7', '8', '9', '+'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '*'],
      ['0', 'C', '=', '/']
    ]
  },

  methods: {
    select: function(input) {
      switch (input) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
          this.calculate(input);
          break;
        case 'C':
          this.reset();
          break;
          
        default:
          console.log("Number");
          this.changeCurrent(input);
          
          break;
      }
      
    },

    changeCurrent: function(number) {
      // Can't add 0 if current is actually 0
      if(this.current == 0) {
        this.current = number;
      } else {
        this.current += number;
      }
    },

    calculate: function(operator) {
      // Only if current is a number
      if(this.current !== 0) {
        // Only if operator is not "="
        if (operator !== '='){
          this.operator = operator;
          this.numToCalc.push(parseFloat(this.current), operator)
          this.current = 0;

        // If operator '=' -> Calculate all numbers values
        } else {
          this.numToCalc.push(this.current)
          this.current = 0
          this.total = eval(this.numToCalc.join(''));
          this.numToCalc = [];
        }
        // If current = 0
      } else {
        // Check if array contain number and operator not '='
        if(this.numToCalc.length !== 0 && operator !== '=') {
          // Modify the operator, until a number is enter
          this.operator = operator;
          this.numToCalc[this.numToCalc.length - 1] = operator;
        }
      }      
    },

    reset: function() {
      this.total = 0;
      this.current = '';
      this.operator = '';
      this.numToCalc = [];
    },
  }
})