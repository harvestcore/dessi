(function(window, undefined) {
  var dictionary = {
    "73d6c5ff-9f6d-4282-a5d0-6fe7a05356fa": "queja",
    "ce693580-b42f-4893-b13c-b993f838b90e": "Búsqueda avanzada",
    "03feacfa-c04a-4dfe-8e4f-86f2c568fec3": "listado quejas",
    "12f02e57-5f4e-4127-98dc-cca2bba9d9b4": "Main con login",
    "c66f3752-1e29-4b27-9373-86fdee3d741c": "quejas encontradas",
    "b1dfd8f7-50b5-43cd-9837-e97453a04d4f": "Crear queja",
    "ae762205-4fbd-4085-8dd0-dc703e33fdfd": "estadísticos",
    "50a4d33b-83a9-46d6-a39f-40dd0237ea33": "perfil",
    "b8cb9799-c354-4021-8acd-1863c6cb9f7f": "adminisracion",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Main no login",
    "8e587cf8-73db-40a7-99fa-23459c57d5f4": "Main logueado",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);