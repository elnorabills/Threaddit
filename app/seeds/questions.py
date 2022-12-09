from app.models import db, Question
import os

def seed_questions():
    # t/AskThreaddit (5 Questions)
    question1 = Question(
        userId=1 ,title='How would you feel about a law that bans radio stations from playing commercials with honking/beeping/siren noises in them?', body='Upvote if in favor.', postCategory='askThreaddit'
    )
    question2 = Question(
        userId=2 ,title='What if Earth is like one of those uncontacted tribes in South America, like the whole Galaxy knows we are here but they have agreed not to contact us until we figure it out for ourselves?', body='Do you think we will ever reach that point?', postCategory='askThreaddit'
    )
    question3 = Question(
        userId=3 ,title='Bill Gates said, "I will always choose a lazy person to do a difficult job because a lazy person will find an easy way to do it." What is a real-life example of this?', body='All examples are valid.', postCategory='askThreaddit'
    )
    question4 = Question(
        userId=4 ,title='What free things online should everyone take advantage of?', body='This includes apps and websites.', postCategory='askThreaddit'
    )
    question5 = Question(
        userId=5 ,title='With all the negative headlines dominating the news these days, it can be difficult to spot signs of progress. What makes you optimistic about the future?', body='Any example, big or small, is valid', postCategory='askThreaddit'
    )
    # t/Gaming (5 questions)
    question6 = Question(
        userId=1 ,title='Why does God of War Ragnorok treat me like a child?', body='Is this a kids game or something? Because it seems to think I must only be like 8 years old with how quickly it gives me the puzzle solutions. It is annoying, let me figure it out for myself instead of waiting a minute and then having someone essentially tell me the answer.', postCategory='gaming'
    )
    question7 = Question(
        userId=2 ,title='Why do we not see more games utilizing the facial animation techniques from LA Noire?', body='I do not want to hear that money is the primary issue', postCategory='gaming'
    )
    question8 = Question(
        userId=3 ,title='What game has mastered 3rd person combat?', body='All examples are valid', postCategory='gaming'
    )
    question9 = Question(
        userId=4 ,title='What game is the most nostalgic for you?', body='For me it is club penguin.', postCategory='gaming'
    )
    question10 = Question(
        userId=5 ,title='What is your favorite pirate game?', body='I really love anything and everything to do with pirates and want to play all the games that have to do with being a pirate. Yaaarrrggg.', postCategory='gaming'
    )
    # t/Movies (5 questions)
    question11 = Question(
        userId=1 ,title='We always hear about who are the best movie lawyers? However, I want to hear: Who are the worst/incompetent movie lawyers?', body='We always hear about the best lawyers, like Atticus Finch in To Kill a Mockingbird. However, what are some examples of the worst or most incompetent movie lawyers. I got this idea from re-watching Con Air and Cameron Poes lawyer, despite having one of the most clear-cut cases of self-defence in history, tells Cameron he should plead guilty to killing the attacker at the bar. Not only that, he gets way more jail time than his lawyer tells him. What are some examples?', postCategory='movies'
    )
    question12 = Question(
        userId=2 ,title='What movie sequel is insane compared to the original?', body='I watched Gremlins 2 for the first time in years the other day and wow, that movie is wacky when compared to the original. It breaks the fourth wall numerous times, such as having Leonard Maltin getting attacked while reviewing the first Gremlins, and really comes off as almost a parody of that movie.', postCategory='movies'
    )
    question13 = Question(
        userId=3 ,title='What is your favorite movie from 1999? (Eyes Wide Shut, Fight Club, Magnolia, The Matrix, etc.)', body='I feel like there are so many good movies from that year so let me know what you think the best one is.', postCategory='movies'
    )
    question14 = Question(
        userId=4 ,title='Films that warrant a sequel but did not get one?...', body='Had this discussion at work, I had to come up with a sequel I would like to see that never got made and I am really struggling. Everything I think of makes sense as a stand-alone movie that does notneed a sequel. My mate came up with True Lies, which I think is a good choice. It requires some thought as it has to make sense, for example; Shawshank Redemption does not work cause it would just be Andy painting some boats in Mexico, boring. What are your suggestions?', postCategory='movies'
    )
    question15 = Question(
        userId=5 ,title='Besides the Joker, has any specific character ever won an Oscar for two different actors in two different movies?', body='Heath Ledger posthumously won an Oscar for his portrayal of "The Joker" in The Dark Knight, and Joaquin Phoenix won one for his portrayal of the same character in 2020s "Joker." Is there any other specific character that two different actors have ever won two different actors Oscars for their portrayal?', postCategory='movies'
    )
    # t/DoesAnybodyElse (5 questions)
    question16 = Question(
        userId=1 ,title='DAE stay up too late despite needing to sleep because you do not want your free time to end?', body='I do this all the time and cannot seem to stop, anyone else?', postCategory='t/DoesAnybodyElse'
    )
    question17 = Question(
        userId=2 ,title='DAE think the music they listen to is really good while listening alone, but when showing it to others, they get extremely self-conscious about it?', body='I think I have good taste in music but I do not think anyone else thinks this.', postCategory='t/DoesAnybodyElse'
    )
    question18 = Question(
        userId=3 ,title='DAE not feel comfortable if they have things to do later in the day?', body='I cannot enjoy my current time if I know I have something to do later. For example, I have to take my mom to the airport at 5 PM, and I felt like my whole day was wasted because I could not just chill and crawl in bed knowing I had to be somewhere later, even though I was up at 7 AM. Anyone else have this problem?', postCategory='t/DoesAnybodyElse'
    )
    question19 = Question(
        userId=4 ,title='DAE continue to type their full sentence even when their keyboard freezes so they can watch the sentence type itself up when it unfreezes?', body='It is so satisfying to me.', postCategory='t/DoesAnybodyElse'
    )
    question20 = Question(
        userId=5 ,title='DAE restart a good song if they are distracted and not appreciate the song enough?', body='I respect the song too much to not appreciate it in its entirety', postCategory='t/DoesAnybodyElse'
    )
    # t/AskScience (5 questions)
    question21 = Question(
        userId=1 ,title='Why is it that during winter it is not uncommon to have days with abnormally high temperature and summer-like weather, but in the summer it never drops to winter-like weather for a day?', body='I live in the USA Midwest', postCategory='askScience'
    )
    question22 = Question(
        userId=2 ,title='Do giraffes get struck by lightning more often than other animals?', body='I am so curious someone help me figure this out.', postCategory='askScience'
    )
    question23 = Question(
        userId=3 ,title='What percentage of my weight am I actually lifting when doing a push-up?', body='I love pushups but always wonder how much of my weight I am using.', postCategory='askScience'
    )
    question24 = Question(
        userId=4 ,title='If hand sanitizer kills 99.99 percent of germs, then will the surviving 0.01 percent make hand sanitizer resistant strains?', body='Does this make using hand sanitizer completely useless?', postCategory='askScience'
    )
    question25 = Question(
        userId=5 ,title='Why do we have to "fall" asleep? Why can we not just decide to be asleep?', body='I want to be able to control this like flipping a lightswitch.', postCategory='askScience'
    )


    db.session.add(question1)
    db.session.add(question2)
    db.session.add(question3)
    db.session.add(question4)
    db.session.add(question5)
    db.session.add(question6)
    db.session.add(question7)
    db.session.add(question8)
    db.session.add(question9)
    db.session.add(question10)
    db.session.add(question11)
    db.session.add(question12)
    db.session.add(question13)
    db.session.add(question14)
    db.session.add(question15)
    db.session.add(question16)
    db.session.add(question17)
    db.session.add(question18)
    db.session.add(question19)
    db.session.add(question20)
    db.session.add(question21)
    db.session.add(question22)
    db.session.add(question23)
    db.session.add(question24)
    db.session.add(question25)

    db.session.commit()

def undo_questions():
    if os.environ.get("FLASK_ENV") == 'development':
        db.session.execute('DELETE FROM questions;')
    else:
        db.session.execute('TRUNCATE questions RESTART IDENTITY CASCADE;')
    db.session.commit()
