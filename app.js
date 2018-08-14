var wishlists = [ 
  ];

var app = new Vue({
    el: '#app',
    data: {
      wishlists: wishlists,
      editName: this.name,
      editPrice: this.price,
      editAmountSaved: this.amountSaved,
      editCategory: this.category,
      editYears: this.years,
      editMonths: this.months,
      editWeeks: this.weeks,
      editLink: this.link,
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
        this.wishlists[index].editting = true;
        this.wishlists[index].editName = this.wishlists[index].name;
        this.wishlists[index].editPrice = this.wishlists[index].price;
        this.wishlists[index].editAmountSaved = this.wishlists[index].amountSaved;
        this.wishlists[index].editCategory = this.wishlists[index].category;
        this.wishlists[index].editYears = this.wishlists[index].years;
        this.wishlists[index].editMonths = this.wishlists[index].months;
        this.wishlists[index].editWeeks = this.wishlists[index].weeks;
        this.wishlists[index].editLink = this.wishlists[index].link;
        localStorage.setItem('wishlists', JSON.stringify(this.wishlists));
        },
        updateItem: function(index) {
          this.wishlists[index].name = this.wishlists[index].editName;
          this.wishlists[index].price = this.wishlists[index].editPrice.replace(',', '').replace('£', '');
          this.wishlists[index].amountSaved = this.wishlists[index].editAmountSaved;
          this.wishlists[index].category = this.wishlists[index].editCategory;
          this.wishlists[index].years = this.wishlists[index].editYears;
          this.wishlists[index].months = this.wishlists[index].editMonths;
          this.wishlists[index].weeks = this.wishlists[index].editWeeks;
          this.wishlists[index].link = this.wishlists[index].editLink;
          this.wishlists[index].editting = false;
          localStorage.setItem('wishlists', JSON.stringify(this.wishlists));
        },

        scrollToTop: function(){
          $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        },

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
            })
            localStorage.setItem('wishlists', JSON.stringify(this.wishlists));
          }
          
        },

        deleteItem: function(index){
          this.wishlists.splice(index, 1),
          localStorage.setItem('wishlists', JSON.stringify(this.wishlists));
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
            this.newLink = 'http://';
            this.newYears = null;
            this.newMonths = null;
            this.newWeeks = null;
            this.newAmountSaved = 0;
            this.error = false;
          }
        }
      },

      mounted: function mounted() {
        console.log('App mounted!');
        if (localStorage.getItem('wishlists')) this.wishlists = JSON.parse(localStorage.getItem('wishlists'));
      }
      
    }
  );

  //var for wishlists that 


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
  