const wishlists = [
    {
      category: 'home',
      name: 'Deposit for house',
      price: 24000,
      link: 'http://www.zoopla.co.uk/',
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      amountSaved: 7000
    },
    {
      category: 'car',
      name: 'BMW M3',
      price: 45000,
      link: 'http://www.bmw.co.uk/',
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      amountSaved: 9000
    }
  ];

  console.log(wishlists);

var display = new Vue({
    el: '#listContainer',
    data: {
      wishlists: wishlists
    },
    methods: {
      savedPercentage : function savedPercentage(wish) {
         var percentage = Math.round(((wish.amountSaved / wish.price) * 100));
         return percentage;
      },

      catImageLink : function catImageLink(wish) {
        var catImageLink = 'resources/categories/' + wish.category + '.svg';
        return catImageLink;
      }
    }
  });

  var input = new Vue({
    el: '#form',
    data: {
      wishlists: wishlists,
      newName: '',
      newPrice: 0,
      newAmountSaved: null,
      newCategory: '',
      newYears: 0,
      newMonths: 0,
      newWeeks: 0,
      newDays: 0,
      newLink: null
    },
    methods: {

      addNew: function(){
        this.wishlists.push({
          category: this.newCategory,
          name: this.newName,
          price: this.newPrice,
          link: this.newLink,
          years: this.newYears,
          months: this.newMonths,
          weeks: this.newWeeks,
          days: this.newDays,
          amountSaved: this.newAmountSaved
        })
      },
      scrollToBottom: function(){
        $('html, body').animate({ 
          scrollTop: $(document).height()}, 
          400
          
        );
      }
    }
  });

  console.log(wishlists[0]);






