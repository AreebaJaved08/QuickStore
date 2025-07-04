import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
	initialize() {
    this._removeAfterTimeout()
    }

	remove() {
		this.element.remove()
	}

	_removeAfterTimeout() {
    setTimeout(() => this.element.remove(), 10000)
  }
}