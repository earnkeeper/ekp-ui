export class JsonSchema {
  static simple(properties: Record<string, string>) {
    const schema = {
      type: 'object',
      properties: {},
    };

    for (const fieldName of Object.keys(properties)) {
      schema.properties[fieldName] = {
        type: properties[fieldName],
      };
    }

    return schema;
  }
}
