#version 330 core
out vec4 FragColor;

in vec3 ourColor;
in vec2 texCoord;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float mixValue;

void main()
{
	float dist = distance(texCoord, vec2(0.5, 0.5));
	vec4 smiley = texture(texture2, vec2(1 - texCoord.x, texCoord.y));
	FragColor = mix(texture(texture1, texCoord), smiley, mixValue);
}