let a = [];
let c = [];
export function isFolder(arr, parentId) {
  if (arr[0].IsFolder) {
    arr.map((el) => {
      c.push({
        cat: el.Name,
        catId: el.Code,
        parentId,
      });
      isFolder(el.Elements, el.Code);
    });
  } else {
    arr.map((el) => {
      a.push({ ...el, catId: parentId });
    });
  }
  return { c, a };
}