
angular.module('xeditable').directive('editableCombodate', ['editableDirectiveFactory', 'editableCombodate',
  function(editableDirectiveFactory, editableCombodate) {
    return editableDirectiveFactory({
      directiveName: 'editableCombodate',
      inputTpl: '<input type="datetime">',
      render: function() {
        this.parent.render.call(this);
        var combodate = editableCombodate.getInstance(this.inputEl, angular.extend({}, {value: new Date(this.scope.$data)}, this.attrs));

        var self = this;
        combodate.$widget.find('select').bind('change', function(e) {
          if(combodate.getValue()){
            self.scope.$data = moment(combodate.getValue(), combodate.options.format);
          }
        });
      }
    });
  }
]);
