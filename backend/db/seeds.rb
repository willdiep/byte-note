# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(name: 'Allen Shin')

article1 = Article.create(title: 'How to write a HOC in 3 easy steps', url: 'https://paulgray.net/how-to-write-a-hoc/?utm_campaign=React%2BNewsletter&utm_medium=email&utm_source=React_Newsletter_100')
article2 = Article.create(title: 'Optimize Backbone Filtering', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0167642319301674')
article3 = Article.create(title: 'End-to-end information flow security for web services orchestration', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0167642318301618')
article4 = Article.create(title: 'Automatic syntax error reporting and recovery in parsing expression grammars', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0167642319301662')
article5 = Article.create(title: 'Formalizing SPARCv8 instruction set architecture in Coq', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0167642318301163')

note1 = Note.create(user_id: 1, article_id: 1, text: "Sample Text 1")
note2 = Note.create(user_id: 1, article_id: 2, text: "Sample Text 2")
note3 = Note.create(user_id: 1, article_id: 3, text: "Sample Text 3")
note4 = Note.create(user_id: 1, article_id: 4, text: "Sample Text 4")
note5 = Note.create(user_id: 1, article_id: 5, text: "Sample Text 5")