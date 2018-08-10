const wishlists = [ 
  ];

var display = new Vue({
    el: '#listContainer',
    data: {
      wishlists: wishlists,
      newName: this.name,
      newPrice: this.price,
      newAmountSaved: this.amountSaved,
      newCategory: this.category,
      newYears: this.years,
      newMonths: this.months,
      newWeeks: this.weeks,
      newLink: this.link
    
    },
    methods: {
      savedPercentage : function savedPercentage(wish) {
         var percentage = Math.round(((wish.amountSaved / wish.price) * 100));
         return percentage;
      },

      catImageLink : function catImageLink(wish) {
        var catImageLink = 'resources/categories/' + wish.category + '.svg';
        return catImageLink;
      },

      timeframeWeekly: function timeframeWeekly(wish) {
        var timeframe = (wish.years * 52.1429) + (wish.months * 4.34524) + (wish.weeks);
        var timeframeWeekly = (wish.price - wish.amountSaved) / timeframe;
        return timeframeWeekly;
      },
      
      
      toggleUpdate: function(index)  {
        wishlists[index].editting = true;
        
        wishlists[index].newName = wishlists[index].name;
        wishlists[index].newPrice = wishlists[index].price;
        wishlists[index].newAmountSaved = wishlists[index].amountSaved;
        wishlists[index].newCategory = wishlists[index].category;
        wishlists[index].newYears = wishlists[index].years;
        wishlists[index].newMonths = wishlists[index].months;
        wishlists[index].newWeeks = wishlists[index].weeks;
        wishlists[index].newLink = wishlists[index].link;
        },
        updateItem: function(index) {
          wishlists[index].name = wishlists[index].newName;
          wishlists[index].price = wishlists[index].newPrice.replace(',', '').replace('£', '');
          wishlists[index].amountSaved = wishlists[index].newAmountSaved;
          wishlists[index].category = wishlists[index].newCategory;
          wishlists[index].years = wishlists[index].newYears;
          wishlists[index].months = wishlists[index].newMonths;
          wishlists[index].weeks = wishlists[index].newWeeks;
          wishlists[index].link = wishlists[index].newLink;
          wishlists[index].editting = false;
        },

        scrollToTop: function(){
          $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }
      }
      
    }
  );

  var input = new Vue({
    el: '#form',
    data: {
      wishlists: wishlists,
      newName: '',
      newPrice: null,
      newAmountSaved: 0,
      newCategory: '',
      newYears: null,
      newMonths: null,
      newWeeks: null,
      newLink: 'http://',
      error: false,
      editting: false

    },
    methods: {

      addNew: function(){
        if(!this.newName || !this.newPrice || !this.newCategory) {
          this.error = true;
        } else {
          this.wishlists.push({
            category: this.newCategory,
            name: this.newName,
            price: this.newPrice.replace(',', '').replace('£', ''),
            link: this.newLink,
            years: this.newYears,
            months: this.newMonths,
            weeks: this.newWeeks,
            amountSaved: this.newAmountSaved,
            editting: false
          });
        
        }
        
      }
      ,
      scrollToBottom: function(){
        if(!this.newName || !this.newPrice || !this.newCategory) {
          this.error = true;
        } else {
          $('html, body').animate({ 
            scrollTop: $(document).height()}, 
            400
          );
          this.newCategory = '';
          this.newName = '';
          this.newPrice = '';
          this.newLink = 'http://';
          this.newYears = null;
          this.newMonths = null;
          this.newWeeks = null;
          this.newAmountSaved = 0;
          this.error = false;
        }
      }
    }
  });


// Test Object

// {
//   amountSaved: 1500,
//   category: "home",
//   editting: false,
//   link: "http://",
//   months: null,
//   name: "Test",
//   price: "2500",
//   weeks: '6',
//   years: null,
// }
  