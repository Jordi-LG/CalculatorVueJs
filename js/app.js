let vm = new Vue ({
  el: "#app",
  data: {
    total: 0,
    current: 0,
    operator: '',
    rowNumber: [
      [7, 8, 9, '+'],
      [4, 5, 6, '-'],
      [1, 2, 3, '*'],
      [0, 'C', '=', '/']
    ]
  },

  methods: {
    select: function(input) {
      console.log(typeof input);
      
    }
  }
})