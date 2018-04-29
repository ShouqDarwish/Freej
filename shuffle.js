var Demo = function (element) {
  this.element = element;
  this.initShuffle();
  this.setupEvents();
};

// Column width and gutter width options can be functions
Demo.prototype.initShuffle = function () {
  this.shuffle = new Shuffle(this.element, {
    itemSelector: '.box',
    speed: 250,
    easing: 'ease',
    columnWidth: function (containerWidth) {
      // .box's have a width of 18%
      return 0.18 * containerWidth;
    },

    gutterWidth: function (containerWidth) {
      // .box's have a margin-left of 2.5%
      return 0.025 * containerWidth;
    },
  });
};

Demo.prototype.setupEvents = function () {
  document.querySelector('#append').addEventListener('click', this.onAppendBoxes.bind(this));
  document.querySelector('#prepend').addEventListener('click', this.onPrependBoxes.bind(this));
  document.querySelector('#randomize').addEventListener('click', this.onRandomize.bind(this));
  document.querySelector('#remove').addEventListener('click', this.onRemoveClick.bind(this));
  document.querySelector('#sorter').addEventListener('change', this.onSortChange.bind(this));
  document.querySelector('#filterer').addEventListener('change', this.onFilterChange.bind(this));
  this.shuffle.element.addEventListener('click', this.onContainerClick.bind(this));

  // Show off some shuffle events
  this.shuffle.on(Shuffle.EventType.REMOVED, function (data) {
    console.log(data);
  });
};
    
Demo.prototype.filterBy = function (value) {
  var filterBy;
  var _this = this;

  if (value === 'none') {
    filterBy = Shuffle.ALL_ITEMS;
  } else if (value === 'bag') {
    filterBy = function (element) {
      return _this.getReviews(element) % 2 === 1;
    };
  } else {
    filterBy = function (element) {
      return _this.getReviews(element) % 2 === 0;
    };
  }

  this.shuffle.filter(filterBy);
};