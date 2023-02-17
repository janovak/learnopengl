#version 330 core
out vec4 FragColor;

in vec3 ourColor;
in vec2 texCoord;

uniform sampler2D texture1;
uniform sampler2D texture2;

void main()
{
	vec2 newCoord = 2.0 * texCoord;
	FragColor = mix(texture(texture1, newCoord), texture(texture2, vec2(1 - newCoord.x, newCoord.y)), 0.2);
}