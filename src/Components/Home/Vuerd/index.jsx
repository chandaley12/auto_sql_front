import React, {useEffect} from 'react';
import "vuerd";
import "vuerd/theme/abyss.css";
import "vuerd/theme/kimbie-dark.css";
import "vuerd/theme/monokai.css";
import "vuerd/theme/monokai-dimmed.css";
import "vuerd/theme/one-dark-pro.css";
import "vuerd/theme/red.css";
import "vuerd/theme/solarized-dark.css";
import "vuerd/theme/solarized-light.css";
import "vuerd/theme/tomorrow-night-blue.css";
import "vuerd/theme/vscode-dark.css";

const Vuerd = () => {

    const data = `{"canvas":{"width":2000,"height":2000,"scrollTop":1.1111111640930176,"scrollLeft":2.222222328186035,"show":{"tableComment":true,"columnComment":true,"columnDataType":true,"columnDefault":true,"columnAutoIncrement":false,"columnPrimaryKey":true,"columnUnique":false,"columnNotNull":true,"relationship":true},"database":"MySQL","databaseName":"","canvasType":"ERD","language":"GraphQL","tableCase":"pascalCase","columnCase":"camelCase","setting":{"relationshipDataTypeSync":true,"columnOrder":["columnName","columnDataType","columnNotNull","columnUnique","columnAutoIncrement","columnDefault","columnComment"]}},"table":{"tables":[{"name":"test1","comment":"","columns":[{"name":"id","comment":"","dataType":"INT","default":"","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":true},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60},"id":"2a23980e-6a43-dc86-f8f8-673f42871bf4"},{"name":"value","comment":"","dataType":"CHAR","default":"","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60},"id":"0e932935-a8ff-eb86-7c58-27638f9a36c0"},{"name":"","comment":"","dataType":"INT","default":"","option":{"autoIncrement":false,"primaryKey":true,"unique":false,"notNull":true},"ui":{"active":false,"pk":true,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60},"id":"c8371ad4-c3ff-736b-c98a-7bb6addb6d12"}],"ui":{"active":false,"left":176.66666609563933,"top":135.55555649745614,"zIndex":30,"widthName":60,"widthComment":60},"id":"efd96ddf-6585-dd8f-1b66-01d2b214f40a"},{"name":"test2","comment":"","columns":[{"name":"id","comment":"","dataType":"INT","default":"","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60},"id":"3c45d74e-589d-3fa0-6061-ca1d270e6abb"},{"name":"test1_id","comment":"","dataType":"INT","default":"","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":true,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60},"id":"7b09a6f2-c7c7-963c-9aaa-a95287b6a0ee"}],"ui":{"active":true,"left":597.7777883623849,"top":173.33333527600308,"zIndex":31,"widthName":60,"widthComment":60},"id":"cd2c1835-8a01-dbcd-6c6d-f6c8b1b7788f"}],"indexes":[]},"memo":{"memos":[]},"relationship":{"relationships":[{"identification":false,"start":{"tableId":"efd96ddf-6585-dd8f-1b66-01d2b214f40a","columnIds":["c8371ad4-c3ff-736b-c98a-7bb6addb6d12"],"x":523.6666660956394,"y":200.80555649745614,"direction":"right"},"end":{"tableId":"cd2c1835-8a01-dbcd-6c6d-f6c8b1b7788f","columnIds":["7b09a6f2-c7c7-963c-9aaa-a95287b6a0ee"],"x":597.7777883623849,"y":228.33333527600308,"direction":"left"},"id":"118f5f6c-a5a2-2de1-a0df-5afa1e9cb284","relationshipType":"OneN"}]}}`;

    useEffect(() => {
        const container = document.querySelector("#app");
        let editor = document.createElement("erd-editor");
        container.appendChild(editor);

        editor = document.querySelector("erd-editor");

        editor.initLoadJson(data);

        window.addEventListener("resize", () => {
            editor.width = window.innerWidth;
            editor.height = window.innerHeight;
        });
        window.dispatchEvent(new Event("resize"));

    }, [])

    return (
        <div id="app" style={{
            width:"100%",
            height:"100%",
        }}>
        </div>
    );
}
export default Vuerd;