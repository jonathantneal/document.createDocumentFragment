(function () {
	var
	MATCH = '(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)',
	QUOTE = '(["\'])((?:(?=(\\\\?))\\8.)*?)\\6',
	REGEX = '^(?:' + MATCH + ')|^#' + MATCH + '|^\\.' + MATCH + '|^\\[' + MATCH + '(?:([*$|~^]?=)' + QUOTE + ')?\\]|^(\\s+)|^\\s*(,)\\s*|^' + QUOTE.replace(6, 11).replace(8, 13),
	createDocumentFragment = Document.prototype.createDocumentFragment;

	Document.prototype.createDocumentFragment = function (selector) {
		for (
			var
			self = this,
			documentFragment = createDocumentFragment.call(self),
			createElement = self.createElement.bind(self),
			element = selector && documentFragment.appendChild(createElement('div')), match, temp;
			selector && (match = selector.match(REGEX));
		) {
			if (match[1]) { element.parentNode.replaceChild(temp = createElement(match[1]), element); element = temp; }
			if (match[2]) element.id = match[2];
			if (match[3]) element.classList.add(match[3]);
			if (match[4]) element.setAttribute(match[4], match[7] || '');
			if (match[9]) element = element.appendChild(createElement('div'));
			if (match[10]) element = documentFragment.appendChild(createElement('div'));
			if (match[11]) { element.parentNode.replaceChild(temp = self.createTextNode(match[12]), element); element = temp; }

			selector = selector.slice(match[0].length);
		}

		return documentFragment;
	};
})();
