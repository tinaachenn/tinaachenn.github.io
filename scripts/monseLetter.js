let count = 0;

function forwardButton() {
    const textBox = document.getElementById("text");
    if (count == 0) {
        textBox.innerHTML = `<p> Maybe its twisted -- that I would rather know all of you than have you know anything of me. It's scary when you say 
        "because I know you." It's terrifying when you can read me, my face, and my emotions so easily. If I could I would 
        rather make everything about you and stay as far away from the spotlight as possible. Maybe it was a way of protecting myself. 
        Maybe it was a way of me trying to keep you at a constant distance and convincing myself that I could never truly be hurt no 
        matter what you do. But I know that's not what I really want. I want to be known and understood. I want to loved by you. And 
        to do that I know I have to accept the risks of being vulnerable and of being weak. To love someone means having to accept 
        that the same love back and all its terms and conditions. To love someone is to mutually exchange the risks of heartbreak. 
        Love is not one-sided. No matter how hard I try to just love you and reject your pleas to understand me in order to protect 
        myself, I know that to truly let love in I have to let you in. You already know more about me than anyone else and maybe
        sometimes you even know more about me than I do. I hope that you'll continue to be patient with me as I slowly learn to
        open up and communicate.</p>
        <p> So how do I know that I love you? How do I know I've figured it out? Beyond the fact that I love your smile, your laugh, 
        and the way you obsess over songs, books, or movies. Beyond the fact that I love your passion, your drive, your ambition 
        and determination. Beyond the fact that I love that no matter how many times you've been put down, you always get up again. 
        Or the fact that you always treat others with kindness when all you've known is the opposite. I love you because I care for you.
        You make me want to be a better person. Someone who can be strong when you can't, someone who is kind when they're not. I want to 
        be the one you can always rely on and the one you can always turn to. I won't always understand and I won't always be a great help. 
        But I can listen and I can try. I know I love you because I'm willing to be vulnerable and weak for you. I know I love you because I 
        am willing to give you all of me just like you've done for me. </p>
        <p> It's been a pleasure being with you for the past year. I can't say it hasn't been quite the tumultuous journey already, but I'm glad 
        we've been able to stuck it out together thus far. I'll be the first to admit that I'm not the best lover. And I'm far from being 
        the best girlfriend. I'm quite unpredictable, stubborn, and shut down when I'm upset. I'm quick to silence and will try to push myself 
        as far away as possible to avoid confrontation. This past semester has been particularly difficult for me. It was the loneliest and most
        stressful semester I've had. There were many times where I wondered what it would be like to go to sleep and not have to wake up the next
        morning. Times where I wondered maybe you would be better off without me in your life and that maybe you wouldn't miss my presence
        all that much since we were so far apart anyway. </p>`;
        count++;
    } else if(count == 1) {
        textBox.innerHTML = `
        <p> Yet, regardless of it all, somehow you always seem to make it all better. You've always
        managed to put up with my moodiness, my bad and dry texts, my terrible communication skills, and my distantness. You always seem to know 
        exactly when I'm upset and how to prod me to open up, despite my best efforts to keep it all in. I know it's all so exhausting and I'm 
        sorry for that. I'm sorry for all the trouble I've cause you when you've already got so much on your plate. I hope you believe me when I say 
        I'll try my hardest to be a better lover and partner to you and that you'll allow me the pleasure of being your girlfriend for many more 
        years. I hope we get to grow and celebrate all of our achievements and failures together. I hope we get to travel to many more places 
        together and embark on many new and exciting adventures. I hope I get to spend endless lazy days with you and fall asleep in your arms.
        </p>
        <p> I know you're just a girl. But I hope you'll be my girl forever. </p>
        <p>I'm in love with you Monse. Thank you for the past year.</p>
        <br>
        <p id="signature1">Devotedly yours, </p>
        <p id="signature2">Tina </p>`;
        count++;
    }
}

function backButton() {
    const textBox = document.getElementById("text");
    if (count == 1) {
        textBox.innerHTML = `<p>Dearest Monse,</p>
        <p>For the longest time, love has always been an incomprehensible and foreign concept to me. I've always 
            struggled with the idea of love and understanding what it means to love and be in love with someone. I've always
            wondered how people know when they're in love and how they differentiate it from simple attraction. I always wondered
            how I'll know when I'm in love. While I've yet to find the the answer to many of these questions, I've come to learn 
            that love doesn't have to be as complicated as I've made it out to be and that maybe I've already found love. 
        </p>
        <p>In fact, love, I've found, can be as simple as wanting to be by your side. Love is wanting you to eat well and bringing 
            you treats after a particularly hard day. Love is looking for you in a crowded room and feeling at ease once I've 
            spotted you. Love is happily spending the day running errands with you or picking you up after work. Love is purchasing 
            trinkets that I think you'd enjoy and finding ways to see you in everything and everywhere, despite being 3000 miles 
            apart two-thirds of every year. Love is always thinking of you and wondering if you are well, if you are happy, 
            if you are content. Love is wanting to celebrate all your achievements and battling all your worries together. Love is 
            wanting to holding you tightly when the world and those around you are so unnecessarily cruel to you and hoping you know 
            that you are always loved. No matter what. Love is wanting to shield you from stress, from pain, from sadness, and 
            everything in between. Love is wanting to be with you and only you. Love is hoping you'll need me and trying my best to 
            fulfill that need. Love is you.
        </p>
        <p> The nuances of love still confound me. I won't deny that I think love is scary. It fact, maybe one of my biggest fears is 
            being in love. To love someone means giving up my entire heart and soul. It means giving someone the power to hurt me in 
            ways I've never been hurt before. It means entrusting someone with all my fears, my worries, my insecurities, my hopes, 
            and my dreams. It means losing control of my emotions and tossing away the unwavering facade I've worked so hard to build. 
            It means letting someone see me for who I truly man. In truth, I'm terrified. Often, I'm unsure if I'm ready for it all. 
            Sometimes I would rather just mean nothing to everyone and live my life relying only on myself. I hate being vulnerable and weak. 
            I hate being dependent and I hate being readable. I want to love someone without having to give myself up. I fear serving my 
            heart on a silver platter and living with the possibility of it being smashed to pieces by the hands of another.
        </p>`;
        count--;
    }else if(count == 2) {
        textBox.innerHTML = `<p> Maybe its twisted -- that I would rather know all of you than have you know anything of me. It's scary when you say 
        "because I know you." It's terrifying when you can read me, my face, and my emotions so easily. If I could I would 
        rather make everything about you and stay as far away from the spotlight as possible. Maybe it was a way of protecting myself. 
        Maybe it was a way of me trying to keep you at a constant distance and convincing myself that I could never truly be hurt no 
        matter what you do. But I know that's not what I really want. I want to be known and understood. I want to loved by you. And 
        to do that I know I have to accept the risks of being vulnerable and of being weak. To love someone means having to accept 
        that the same love back and all its terms and conditions. To love someone is to mutually exchange the risks of heartbreak. 
        Love is not one-sided. No matter how hard I try to just love you and reject your pleas to understand me in order to protect 
        myself, I know that to truly let love in I have to let you in. You already know more about me than anyone else and maybe
        sometimes you even know more about me than I do. I hope that you'll continue to be patient with me as I slowly learn to
        open up and communicate.</p>
        <p> So how do I know that I love you? How do I know I've figured it out? Beyond the fact that I love your smile, your laugh, 
        and the way you obsess over songs, books, or movies. Beyond the fact that I love your passion, your drive, your ambition 
        and determination. Beyond the fact that I love that no matter how many times you've been put down, you always get up again. 
        Or the fact that you always treat others with kindness when all you've known is the opposite. I love you because I care for you.
        You make me want to be a better person. Someone who can be strong when you can't, someone who is kind when they're not. I want to 
        be the one you can always rely on and the one you can always turn to. I won't always understand and I won't always be a great help. 
        But I can listen and I can try. I know I love you because I'm willing to be vulnerable and weak for you. I know I love you because I 
        am willing to give you all of me just like you've done for me. </p>
        <p> It's been a pleasure being with you for the past year. I can't say it hasn't been quite the tumultuous journey already, but I'm glad 
        we've been able to stuck it out together thus far. I'll be the first to admit that I'm not the best lover. And I'm far from being 
        the best girlfriend. I'm quite unpredictable, stubborn, and shut down when I'm upset. I'm quick to silence and will try to push myself 
        as far away as possible to avoid confrontation. This past semester has been particularly difficult for me. It was the loneliest and most
        stressful semester I've had. There were many times where I wondered what it would be like to go to sleep and not have to wake up the next
        morning. Times where I wondered maybe you would be better off without me in your life and that maybe you wouldn't miss my presence
        all that much since we were so far apart anyway. </p>`;
        count--;
    }
}

function goToPage(url) {
    window.location.href = url;
}