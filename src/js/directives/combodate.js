
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
          self.scope.$data = (new Date(combodate.getValue()));
        });
      }
    });
  }
]);
