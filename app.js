const wishlists = [
    
  ];

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
      },

      timeframeWeekly: function timeframeWeekly(wish) {
        var timeframe = (wish.years * 52.1429) + (wish.months * 4.34524) + (wish.weeks);
        var timeframeWeekly = (wish.price - wish.amountSaved) / timeframe;
        return timeframeWeekly;
      }
    }
  });

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
      newLink: null,
      error: false
    },
    methods: {

      addNew: function(){
        if(!this.newName || !this.newPrice || !this.newCategory) {
          this.error = true;
        } else {
          this.wishlists.push({
            category: this.newCategory,
            name: this.newName,
            price: this.newPrice,
            link: this.newLink,
            years: this.newYears,
            months: this.newMonths,
            weeks: this.newWeeks,
            amountSaved: this.newAmountSaved
          });
        
        }
        
      },
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
          this.newLink = null;
          this.newYears = null;
          this.newMonths = null;
          this.newWeeks = null;
          this.newAmountSaved = 0;

          this.error = false;
        }
      }
    }
  });






