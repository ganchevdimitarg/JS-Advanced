class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        const length = this._likes.length;
        const firstLike = this._likes[0];
        if (length === 0) {
            return `${this.title} has 0 likes`
        }
        if (length === 1) {
            return `${firstLike} likes this story!`
        }
        return `${firstLike} and ${length - 1} others like this story!`
    }

    like(username) {
        if (this.likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }
        if (username === this.creator) {
            throw new Error('You can\'t like your own story!');
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this story!')
        }
        const name = this._likes.indexOf(n => n === username);
        this._likes.splice(name);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (id === undefined || !this._comments[id]) {
            this._comments.push({
                id: this._comments.length + 1,
                username: username,
                content: content,
                replies: []
            });
            return `${username} commented on ${this.title}`;
        }
        const comment = this._comments.filter(c => c.id === id);
        if (comment) {
            const first = comment[0].id;
            const second = comment[0].replies.length + 1;
            comment[0].replies.push({
                id: `${first}.${second}`,
                username: username,
                content: content
            });
            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        if (sortingType === 'asc') {
            this._comments.sort(((a, b) => a.id - b.id));
            this._comments.forEach(c => c.replies.sort(((a, b) => a.id.localeCompare(b.id))));
        } else if (sortingType === 'desc') {
            this._comments.sort(((a, b) => b.id - a.id));
            this._comments.forEach(c => c.replies.sort(((a, b) => b.id.localeCompare(a.id))));
        } else {
            this._comments.sort(((a, b) => a.username.localeCompare(b.username)));
            this._comments.forEach(c => c.replies.sort(((a, b) => a.username.localeCompare(b.username))));
        }

        const result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, `Comments:`];

        this._comments.forEach(comment => {
            result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
            if (comment.replies.length !== 0) {
                comment.replies.forEach(replie => {
                    result.push(`--- ${replie.id}. ${replie.username}: ${replie.content}`)
                });
            }
        });

        return result.join('\n');
    }

}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

