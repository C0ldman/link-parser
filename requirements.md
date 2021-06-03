Hi! My name is Bohdan, I'm Frontend Developer at Vinelab and I'm glad to meet you!

I have created three interview tasks for candidates applying for Frontend Developer position at Vinelab. They are all based on my recent real-life tasks. Here they are, called by topics they are covering:

1. VanillaJS
2. CSS (SASS)
3. VueJS

Each task is a separate Codesandbox project. To implement a task, fork the project first. Submit a link with the forked project after you are done. Good luck!

.

#This is task number 1 - VanillaJS#

Imagine your company has a website run by some Content Management System (WordPress/Webflow/Ghost/etc...). Some people from your team, for example, a designer and a SEO expert can create pages and posts on the website. They also can edit content of any page or post at any time. They can add images, text, buttons, links and so on.

Here on the right you can see a simulated version of such website. This is how a rendered page/post could look like. There are a lot of random elements like paragraphs, cards, tables, headings with some random content. For this task only **links** are in your focus. You can ignore the rest.

##Short description##

You should create a script that grabs all the query parameters from the current URL that start with `abc_` and adds them to all links on the page that lead to https://subdomain.example.com/...

Let's start with an example.

1. Your current route is https://51dec.csb.app/
2. You have a link on the page that looks like this: <a href="https://subdomain.example.com/anything/">Click me</a>
3. So far nothing happens
4. You change current route to be https://51dec.csb.app/?abc_number=123
5. Then, right after page is loaded, your link becomes <a href="https://subdomain.example.com/anything/?abc_number=123">Click me</a>
6. You change current route to be https://51dec.csb.app/?abc_string=HELLO
7. Then, right after page is loaded, your link becomes <a href="https://subdomain.example.com/anything/?abc_string=HELLO">Click me</a>

Now, let's wrap it up into stricter requirements.

##Requirements##

1. The route can have many different query parameters, you should grab only those that start with `abc_` and you should ignore the rest. For example, you grab `abc_referrer`, `abc_d`, `abc_anything` and you ignore `date_from`, `bar`, `abcsome`, `aabc_d`, `ab_g`.

2. Both uppercase and lowercase letters can be used. For example, `abc_date`, `ABC_DATE`, `aBc_dAtE`, `abc_datE`. You should **not** ignore them.

3. You should lowercase query keys before adding them to the links. For example, `aBC_reFErrer` should become `abc_referrer`.

4. You shouldn't lowercase query values. Add them as is. For example, `ABC_Referrer=PAReNT` should become `abc_referrer=PAReNT`

5. You should add these query parameters to **all** links on the page that **only** start with `https://subdomain.example.com`. For example, you take into account `https://subdomain.example.com/signup` and `https://subdomain.example.com/x/y/z/` and you ignore `https://example.com` and `https://youtube.com`

6. Don't forget that links can already have some query parametrs in them: `https://subdomain.example.com/cancel_subscription?at=1622714331&why=reason`. In this case new parameters should be added to the end: `https://subdomain.example.com/cancel_subscription?at=1622714331&why=reason&abc_referrer=Parent&abc_content=SOMETHING`

7. The links' transformation should happen right after the page has fully loaded, i.e. a moment before it gets first rendered to the user.

##Restrictions##

**The only file you can edit is index.js**
You may notice that this file is included in the <head> of the page. This is a common restriction for many CMSs. You cannot include this file in <body> or any other place.
You are not allowed to remove/change anything in index.html or styles.css. The only exception is: you **can** add new <a> elements in <body> to simplify testing.

The rendered HTML on the right is static, it never changes after a reload. But this is just simulated version for the sake of simplicity. In real life the content of the page is dynamic. You can never tell in advance what and where the elements will be. This is why in your script you shouldn't rely on links' positions or the number of links - these are all unpredictable in real life website. There can be zero links too - don't forget that.

**Also, you cannot use any third-party libraries, only VanillaJS is allowed**
ES6-ES10 is fine though :)

##More examples##

Route: https://51dec.csb.app/
Link: <a href="https://subdomain.example.com/">Link</a>
| | |
V V V
Route: https://51dec.csb.app/?abc_string=HELLO&abc_number=123
Link: <a href="https://subdomain.example.com/?abc_string=HELLO&abc_number=123">Link</a>

.

Route: https://51dec.csb.app/
Link: <a href="https://subdomain.example.com/">Link</a>
| | |
V V V
Route: https://51dec.csb.app/?ABC_string=heLLO&abc_NUMBER=123
Link: <a href="https://subdomain.example.com/?abc_string=heLLO&abc_number=123">Link</a>

.

Route: https://51dec.csb.app/
Link: <a href="https://subdomain.example.com/">Link</a>
| | |
V V V
Route: https://51dec.csb.app/?note=foo&abc_string=hello&date=23-10-2020&abc_number=123&a_b=6
Link: <a href="https://subdomain.example.com/?abc_string=hello&abc_number=123">Link</a>

.

Route: https://51dec.csb.app/
Link: <a href="https://subdomain.example.com/">Link</a>
| | |
V V V
Route: https://51dec.csb.app/?note=foo&date=23-10-2020&a_b=6
Link: <a href="https://subdomain.example.com/">Link</a>

.

Route: https://51dec.csb.app/
Link: <a href="https://google.com/">Link</a>
| | |
V V V
Route: https://51dec.csb.app/?abc_string=hello
Link: <a href="https://google.com/">Link</a>

.

Route: https://51dec.csb.app/
Link: <a href="https://subdomain.example.com/some/nested/stuff?info=bar&n=0">Link</a>
| | |
V V V
Route: https://51dec.csb.app/?abc_reason=why&ABC_G=10
Link: <a href="https://subdomain.example.com/some/nested/stuff?info=bar&n=0&abc_reason=why&abc_g=10">Link</a>

.

###Good luck!###

Questions are welcomed! Please contact your recruiter and then he/she will pass questions to me.
