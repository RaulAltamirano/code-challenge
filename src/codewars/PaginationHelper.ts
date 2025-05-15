export class PaginationHelper {
    private items: [];
    private itemsPerPage: number;

    constructor(collection, itemsPerPage) {
        if (itemsPerPage < 0) {
            throw new Error("itemsPerPage debe ser mayor que cero.");
        }
        this.items = collection
        this.itemsPerPage = itemsPerPage
    }
    get itemCount() {
        return this.items.length
    }
    pageCount() {
        return Math.ceil(this.itemCount / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount) {
            return -1;
        }
        const startIndex = pageIndex * this.itemsPerPage;
        const endIndex = Math.min(startIndex + this.itemsPerPage, this.itemCount);
        return endIndex - startIndex;
    }
    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount) {
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}
