# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: 'User1', firstname: 'Allen', lastname: 'Shin')
user2 = User.create(username: 'User2', firstname: 'Will', lastname: 'Diep')

article1 = Article.create(title: 'How to write a HOC in 3 easy steps', url: 'https://paulgray.net/how-to-write-a-hoc/?utm_campaign=React%2BNewsletter&utm_medium=email&utm_source=React_Newsletter_100', author: 'Author1')
article2 = Article.create(title: 'Optimize Backbone Filtering', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0167642319301674', author: 'Author2')
article3 = Article.create(title: 'End-to-end information flow security for web services orchestration', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0167642318301618', author: 'Author3')
article4 = Article.create(title: 'Automatic syntax error reporting and recovery in parsing expression grammars', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0167642319301662', author: 'Author4')
article5 = Article.create(title: 'Formalizing SPARCv8 instruction set architecture in Coq', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0167642318301163', author: 'Author5')

note1 = Note.create(content: "Sample Content 1" , topic: "Sample Topic 1")
note2 = Note.create(content: "Sample Content 2" , topic: "Sample Topic 2")
note3 = Note.create(content: "Sample Content 3" , topic: "Sample Topic 3")
note4 = Note.create(content: "Sample Content 4" , topic: "Sample Topic 4")

userarticle1 = UserArticle.create(user_id: 1, article_id: 1)
userarticle2 = UserArticle.create(user_id: 1, article_id: 2)
userarticle3 = UserArticle.create(user_id: 1, article_id: 3)
userarticle4 = UserArticle.create(user_id: 1, article_id: 4)
userarticle5 = UserArticle.create(user_id: 1, article_id: 5)
userarticle6 = UserArticle.create(user_id: 2, article_id: 1)
userarticle7 = UserArticle.create(user_id: 2, article_id: 2)
userarticle8 = UserArticle.create(user_id: 2, article_id: 3)
userarticle9 = UserArticle.create(user_id: 2, article_id: 4)
userarticle10 = UserArticle.create(user_id: 2, article_id: 5)


usernote1 = UserNote.create(user_id: 1, note_id: 1)
usernote2 = UserNote.create(user_id: 1, note_id: 2)
usernote3 = UserNote.create(user_id: 1, note_id: 3)
usernote4 = UserNote.create(user_id: 2, note_id: 1)
usernote5 = UserNote.create(user_id: 2, note_id: 2)
usernote6 = UserNote.create(user_id: 2, note_id: 3)
usernote7 = UserNote.create(user_id: 2, note_id: 4)

