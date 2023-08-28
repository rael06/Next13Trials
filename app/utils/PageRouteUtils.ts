export class PageRouteUtils {
  public readonly route: string;
  public readonly strRegex: string;

  public constructor(params: { route: string; strRegex: string }) {
    this.route = params.route;
    this.strRegex = params.strRegex;
  }
}

export class SluggedPageRouteUtils extends PageRouteUtils {
  public readonly slugName: string;

  public constructor(params: {
    slugName: string;
    route: string;
    strRegex: string;
  }) {
    super({ route: params.route, strRegex: params.strRegex });
    this.slugName = params.slugName;
  }

  public getSluggedRoute(slug: string): string {
    return this.route.replace(`[${this.slugName}]`, slug);
  }
}
