Template.post.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var textarea = template.find('textarea');
    Post.publish({message: textarea.value})
    textarea.value = ''
  }
});
