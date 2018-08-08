const wishlist = [
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
    }
  ];

  console.log(wishlist);

var app = new Vue({
    el: '#app',
    data: {
      wishlists: wishlist
    },
    methods: {
      savedPercentage : function savedPercentage() {
         var percentage = Math.round(((wishlist[0].amountSaved / wishlist[0].price) * 100));
         return percentage;
      },

      catImageLink : function catImageLink() {
        var catImageLink = 'resources/categories/' + wishlist[0].category + '.svg';
        return catImageLink;
      }
    }
  });




