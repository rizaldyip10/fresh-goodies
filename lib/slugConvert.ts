export function strToSlug (str: string): string {
    let slug: string;

    if (str.includes(" ")) {
        slug = str.replace(" ", "-").toLowerCase();
        return slug;
    }

    slug = str.toLowerCase();

    return slug;
}

export function slugToStr (slug: string): string {
    let str: string;

    if (slug.includes("-")) {
        str = slug.replace("-", " ");
        return str;
    }

    return str = slug;
}